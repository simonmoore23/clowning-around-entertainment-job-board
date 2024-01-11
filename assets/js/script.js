// drop down for filtering jobs by type. triggered when the selection changes with a hide feature on type of job chosen.
function filterJobs() {
    const jobTypeFilter = document.getElementById('jobType').value;
    const jobListings = document.querySelectorAll('.job-listing');

    jobListings.forEach((jobListing) => {
        const jobType = jobListing.classList[1]; // Assumes that the job type is the second class of the element

        if (jobTypeFilter === 'all' || jobTypeFilter === jobType) {
            jobListing.style.display = 'block';
        } else {
            jobListing.style.display = 'none';
        }
    });
}
