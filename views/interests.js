export function Interests() {
    const interests = ["Programování", "idk", "idk2"];

    return `
        <h2>Znájmy</h2>
        <ul>
            ${interests.map(i => `<li>${i}</li>`).join("")}
        </ul>
    `;
}
