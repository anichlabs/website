import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as topojson from 'topojson-client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const worldAtlasPath = path.join(projectRoot, 'public/lib/land-110m.json');
const outputPath = path.join(projectRoot, 'public/lib/globe-dots.json');

const radius = 1.5;
const step = 2;

function latLonToVec3(lat, lon, r) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  return {
    x: -r * Math.sin(phi) * Math.cos(theta),
    y: r * Math.cos(phi),
    z: r * Math.sin(phi) * Math.sin(theta)
  };
}

function pointInRing(point, ring) {
  let inside = false;
  const x = point[0], y = point[1];
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}

function pointInPolygon(point, polygon) {
  if (!pointInRing(point, polygon[0])) return false;
  for (let i = 1; i < polygon.length; i++) {
    if (pointInRing(point, polygon[i])) return false;
  }
  return true;
}

function isLand(geoData, lon, lat) {
  for (const feature of geoData.features) {
    const geom = feature.geometry;
    if (geom.type === 'Polygon') {
      if (pointInPolygon([lon, lat], geom.coordinates)) return true;
    } else if (geom.type === 'MultiPolygon') {
      for (const poly of geom.coordinates) {
        if (pointInPolygon([lon, lat], poly)) return true;
      }
    }
  }
  return false;
}

console.log('Reading world map data...');
const topo = JSON.parse(fs.readFileSync(worldAtlasPath, 'utf8'));
const geoData = topojson.feature(topo, topo.objects.land);

console.log('Computing land dot positions...');
const positions = [];
for (let lat = -85; lat <= 85; lat += step) {
  for (let lon = -180; lon <= 180; lon += step) {
    if (isLand(geoData, lon, lat)) {
      const v = latLonToVec3(lat, lon, radius * 1.005);
      positions.push(Math.round(v.x * 10000) / 10000);
      positions.push(Math.round(v.y * 10000) / 10000);
      positions.push(Math.round(v.z * 10000) / 10000);
    }
  }
}

const dotCount = positions.length / 3;
console.log(`Generated ${dotCount} land dots.`);

fs.writeFileSync(outputPath, JSON.stringify(positions));
const fileSize = fs.statSync(outputPath).size;
console.log(`Saved to ${outputPath} (${(fileSize / 1024).toFixed(1)} KB)`);