const fs = require('fs');
const lines = fs.readFileSync('C:/Users/mcbm1/.gemini/antigravity-ide/brain/e9056ed6-90c7-4d5a-8db7-32a1fdcf87b1/.system_generated/logs/transcript_full.jsonl', 'utf8').split('\n');
let instructorContent = '';
for (let line of lines) {
  if (!line) continue;
  const obj = JSON.parse(line);
  if (obj.tool_calls) {
    obj.tool_calls.forEach(tc => {
      if (tc.name === 'replace_file_content' && tc.args.ReplacementContent && tc.args.ReplacementContent.includes('프로다이빙 [강사]')) {
        instructorContent = tc.args.ReplacementContent;
      }
    });
  }
}
fs.writeFileSync('C:/Users/mcbm1/.gemini/antigravity-ide/brain/e9056ed6-90c7-4d5a-8db7-32a1fdcf87b1/scratch/instructor.txt', instructorContent);
