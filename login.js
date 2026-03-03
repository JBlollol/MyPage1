document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('loginId').value;
    if(id) {
        alert(`${id} 소위, 전선으로 복귀하십시오!`);
        location.href = "index.html";
    } else {
        alert("ID를 입력하십시오.");
    }
});