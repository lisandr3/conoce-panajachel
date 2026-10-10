import fs from 'node:fs';
export default function(config) {
 const base = process.env.SITE_BASE || '/';
 if (!base.startsWith('/') || !base.endsWith('/')) throw new Error('SITE_BASE debe comenzar y terminar con /');
 config.addFilter('url', p => base + String(p).replace(/^\//, ''));
 config.addGlobalData('year', new Date().getFullYear());
 for (const name of ['identity','navigation','footer']) config.addGlobalData(name, JSON.parse(fs.readFileSync(`data/site/${name}.json`, 'utf8')));
 config.addPassthroughCopy({'src/styles':'styles','src/js':'js','assets':'assets'});
 return {dir:{input:'src/pages',includes:'../components',layouts:'../layouts',output:'dist'},templateFormats:['njk'],htmlTemplateEngine:'njk'};
}
