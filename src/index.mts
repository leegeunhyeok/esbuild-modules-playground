import esbuild from 'esbuild';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, './__fixtures__');
const entryPoint = path.resolve(root, 'index.ts');
const entryPoints = [path.resolve(root, 'index.ts')];
const outputFilesAt = entryPoints.findIndex((path) => path === entryPoint);

const result = await esbuild.build({
  sourceRoot: root,
  entryPoints,
  bundle: true,
  write: false,
});

const bundleContent = Buffer.from(
  result.outputFiles[outputFilesAt].contents,
).toString();

console.log(bundleContent);
