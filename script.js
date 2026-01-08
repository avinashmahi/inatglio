function updateTime() {
    const now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleString();
}

// Change app status dynamically
function changeStatus() {
    const status = document.getElementById("status");
    const build = document.getElementById("build");

    if (status.innerHTML === "Running") {
        status.innerHTML = "Updated";
        build.innerHTML = "v1.1";
    } else {
        status.innerHTML = "Running";
        build.innerHTML = "v1.0";
    }
}

// Auto update time on load
window.onload = updateTime;
