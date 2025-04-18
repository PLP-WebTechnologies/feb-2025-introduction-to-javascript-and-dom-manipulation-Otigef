document.addEventListener('DOMContentLoaded', function() {
    // Bio update functionality
    const updateBioBtn = document.getElementById('update-bio-btn');
    const bioText = document.getElementById('bio-text');
    let isOriginalBio = true;
    const originalBio = bioText.textContent;
    const updatedBio = "Detail-oriented professional transitioning into tech, combining 5+ years of administrative experience with newly acquired technical skills in JavaScript, Python, and web development. Currently enhancing my capabilities through online courses and personal projects focused on building responsive web applications.";
  
    updateBioBtn.addEventListener('click', () => {
      bioText.textContent = isOriginalBio ? updatedBio : originalBio;
      isOriginalBio = !isOriginalBio;
    });
  
    // Highlight toggle functionality
    const toggleStyleBtn = document.getElementById('toggle-style-btn');
    toggleStyleBtn.addEventListener('click', () => {
      const highlightHeader = toggleStyleBtn.previousElementSibling;
      highlightHeader.classList.toggle('active-highlight');
    });
  
    // Vision toggle functionality
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const visionContainer = document.getElementById('vision-container');
    const visionText = "To become a full-stack developer creating impactful solutions for East African businesses, focusing on inventory management and logistics optimization through technology. Committed to lifelong learning and contributing to open-source projects that address regional challenges.";
    let visionElement = null;
  
    toggleElementBtn.addEventListener('click', () => {
      if (!visionElement) {
        visionElement = document.createElement('p');
        visionElement.textContent = visionText;
        visionElement.classList.add('vision-text');
        visionContainer.appendChild(visionElement);
      } else {
        visionContainer.removeChild(visionElement);
        visionElement = null;
      }
    });
  });