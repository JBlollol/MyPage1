// 전체 선택 로직
document.getElementById('checkAll').addEventListener('change', function() {
    const isChecked = this.checked;
    document.querySelectorAll('.terms').forEach(term => term.checked = isChecked);
});

// 주소 검색 API (카카오)
function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById('address').value = data.address;
        }
    }).open();
}

// 아이디/닉네임 중복확인 (Mock 데이터 기반)
document.getElementById('btnIdCheck').addEventListener('click', () => alert("ID 사용 가능합니다. (Checking Server...)"));
document.getElementById('btnNickCheck').addEventListener('click', () => alert("닉네임 사용 가능합니다."));

// 비밀번호 유효성 검사
const pwInput = document.getElementById('pw');
const pwConfirmInput = document.getElementById('pwConfirm');
const pwMsg = document.getElementById('pwMsg');
const pwConfirmMsg = document.getElementById('pwConfirmMsg');

const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

pwInput.addEventListener('input', () => {
    if(pwRegex.test(pwInput.value)) {
        pwMsg.textContent = "VALID PASSWORD";
        pwMsg.className = "msg success";
    } else {
        pwMsg.textContent = "INVALID: Need Eng+Num+Spec (8+ chars)";
        pwMsg.className = "msg error";
    }
});

pwConfirmInput.addEventListener('input', () => {
    if(pwInput.value === pwConfirmInput.value) {
        pwConfirmMsg.textContent = "PASSWORD MATCHED";
        pwConfirmMsg.className = "msg success";
    } else {
        pwConfirmMsg.textContent = "NOT MATCHED";
        pwConfirmMsg.className = "msg error";
    }
});

// 제출 전 최종 체크
document.getElementById('signupForm').addEventListener('submit', (e) => {
    if(!pwRegex.test(pwInput.value) || pwInput.value !== pwConfirmInput.value) {
        e.preventDefault();
        alert("비밀번호 설정을 확인해주세요.");
    } else {
        alert("MISSION COMPLETE! 가입이 완료되었습니다.");
    }
});