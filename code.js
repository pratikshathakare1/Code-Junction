
function toggleContent(id) {
  const element = document.getElementById(id);
  element.style.display = (element.style.display === 'block') ? 'none' : 'block';
}

function showProgram(id) {
  const allPrograms = document.querySelectorAll('.program-code');
  allPrograms.forEach(program => {
    program.style.display = (program.id === id) ? 'block' : 'none';
  });
}
