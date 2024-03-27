const forma = document.querySelector(".forma");
const submit = document.querySelector(".submit");
const textData = document.querySelector(".text-data");
const list = document.querySelector(".list");

forma.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    
    const result = await axios.post('/',  {
        notise: textData.value,
    })
    const { data } = result;
    
    list.insertAdjacentHTML('beforeend', `<li>${data.result.content.notise}</li>`);
    textData.value = '';
});