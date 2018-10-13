function one() {
            const ss = document.getElementById('ss');
            const aa = document.getElementById('aa');
            if (ss && ss.style.display === 'block') {
                ss.style.display = 'none';
            }
            if (aa) {
                aa.style.display = 'block';
            }
        }
        function two() {
            const ss = document.getElementById('ss');
            const aa = document.getElementById('aa');
            if (aa && aa.style.display === 'block') {
                aa.style.display = 'none';
            }
            if (ss) {
                ss.style.display = 'block';
            }
        }