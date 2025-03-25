document.addEventListener('DOMContentLoaded', () => {
    const togglePipelineBtn = document.getElementById('togglePipelineBtn');
    const pipelineImage = document.getElementById('pipelineImage');

    togglePipelineBtn.addEventListener('click', () => {
        if (pipelineImage.style.display === 'block') {
            pipelineImage.style.display = 'none';
            togglePipelineBtn.textContent = 'View CI/CD Pipeline Architecture';
        } else {
            pipelineImage.style.display = 'block';
            togglePipelineBtn.textContent = 'Hide CI/CD Pipeline Architecture';
        }
    });
});