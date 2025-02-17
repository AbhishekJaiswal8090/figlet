document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const convertBtn = document.getElementById('convertBtn');
    const output = document.getElementById('output');

    const convertTextToFiglet = (text) => {
        figlet.defaults({
            fontPath: 'fonts/'  // Ensure this path is correct
        });

        figlet.text(text, (err, data) => {
            if (err) {
                console.error('Something went wrong...', err);
                return;
            }
            output.textContent = data;
        });
    };

    convertBtn.addEventListener('click', () => {
        const text = input.value;
        if (text) {
            convertTextToFiglet(text);
            input.value = '';
        }
    });
});
