export const sendData = (form)=>{
    form.addEventListener('submit' , async e =>{
        e.preventDefault();
        const formData = new FormData(e.target); // Cambiar el nombre a formData
        try {
            const response = await fetch(form.action, {
                method: 'POST', 
                body: formData // Usar formData
            });
            const data = await response.json(); 
            alert(JSON.stringify(data)); 
        } catch (error) {
            console.error(error); 
        }
    });
}