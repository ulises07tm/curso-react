const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {

    return (
    <div className="div-form">
        <form onSubmit={handleSubmitForm} className="form-checkout">

        <label>Nombre completo</label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/>

        <label>Telefono</label>
        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>

        <label>email</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>

        <button type="submit">Enviar mi pedido</button>

        </form>
    </div>
    )
}

export default FormCheckout