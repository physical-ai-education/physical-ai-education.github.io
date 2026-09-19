const scenarios = {
  light: {category: 'UNCERTAINTY / PERCEPTION', title: 'The camera sees a different line.', desc: 'A shadow changes the image. The robot turns too late, moves off the line, and its next camera view changes again.', task: 'Compare camera images and steering decisions under different lighting. Run repeated trials and explain how changed observations led to changed actions.', evidence: 'Images or sensor readings, a time-aligned action trace, and results from repeated runs.'},
  delay: {category: 'TIME & RESOURCES / FEEDBACK', title: 'The right turn arrives too late.', desc: 'The code identifies the line correctly, but slow processing means the robot has already passed the best point to turn.', task: 'Measure the delay between sensing and steering. Try a simpler method or slower speed and explain the tradeoff.', evidence: 'Timestamps, speed and latency measurements, plus a comparison of runs before and after the change.'},
  safety: {category: 'RESPONSIBILITY / INTEGRATION', title: 'The test space has other people in it.', desc: 'The same path now crosses a shared area. A technically successful run needs safer testing limits and a plan for unexpected motion.', task: 'Identify who could be affected, set a safe speed and stopping condition, and revise the test protocol in response.', evidence: 'A brief risk analysis, a documented design change, and observations from a controlled test.'}
};

const buttons = document.querySelectorAll('.scenario');
const fields = {category: 'scenario-category', title: 'scenario-title', desc: 'scenario-desc', task: 'scenario-task', evidence: 'scenario-evidence'};
buttons.forEach(button => button.addEventListener('click', () => {
  const selected = scenarios[button.dataset.scenario];
  if (!selected) return;
  buttons.forEach(item => {item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', item === button ? 'true' : 'false');});
  for (const [key, id] of Object.entries(fields)) document.getElementById(id).textContent = selected[key];
}));
