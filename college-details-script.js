// Populate the college list on index.html
document.addEventListener("DOMContentLoaded", function () {
    const collegeList = document.getElementById("collegeList");
    if (collegeList) {
      colleges.forEach(college => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `college-details.html?id=${college.id}`;
        link.textContent = college.name;
        listItem.appendChild(link);
        collegeList.appendChild(listItem);
      });
    }
  
    // Display specific college details on college-details.html
    const urlParams = new URLSearchParams(window.location.search);
    const collegeId = urlParams.get("id");
  
    if (collegeId) {
      const college = colleges.find(col => col.id == collegeId);
      if (college) {
        document.getElementById("collegeName").textContent = college.name;
        const details = `
          <p><strong>History:</strong> ${college.history}</p>
          <p><strong>Established:</strong> ${college.established}</p>
          <p><strong>Approval:</strong> ${college.approval}</p>
          <p><strong>Recognition:</strong> ${college.recognition}</p>
          <p><strong>Location:</strong> ${college.location}</p>
          <p><strong>Course Curriculum:</strong> ${college.courseCurriculum}</p>
          <p><strong>Faculty Qualification:</strong> ${college.facultyQualification}</p>
          <p><strong>Infrastructure:</strong> ${college.infrastructure}</p>
          <p><strong>Fees:</strong> ${college.fees}</p>
          <p><strong>Scholarships:</strong> ${college.scholarships}</p>
          <p><strong>Placement Records:</strong> ${college.placementRecords}</p>
          <p><strong>Additional Benefits:</strong> ${college.additionalBenefits}</p>
          <p><strong>Admission Seats:</strong> ${college.admissionSeats}</p>
        `;
        document.getElementById("collegeDetails").innerHTML = details;
      } else {
        document.getElementById("collegeDetails").innerHTML = "<p>College not found.</p>";
      }
    }
  });
  