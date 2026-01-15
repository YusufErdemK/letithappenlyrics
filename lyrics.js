const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function justLetItHappen() {
  const lines = [
    ["I cannot vanish , you will not scare me", 80],
    ["Try to get through it, try to push through it", 95],
    ["You were not thinking that I will not do it", 90],
    ["They be lovin' someone and I'm another story", 70],
    ["Take the next ticket, get the next train", 100],
    ["Why would I do it? Anyone'd think that", 100],
    ["Baby, now I'm ready, moving on", 130],
    ["Oh, but maybe I was ready all along", 120],
    ["Oh, I'm ready for the moment and the sound", 134],
    ["Oh, but maybe I was ready all along", 120]
  ];

  const delays = [0, 0, 0, 0, 300, 300, 1000, 1400, 500, 500];

  for (let i = 0; i < lines.length; i++) {
    const [line, charDelay] = lines[i];
    for (const char of line) {
      process.stdout.write(char);
      await sleep(charDelay);
    }
    await sleep(delays[i]);
    process.stdout.write('\n');
  }
}

justLetItHappen();
