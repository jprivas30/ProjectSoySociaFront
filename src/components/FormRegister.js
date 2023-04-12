import React from "react"

const FormRegister = () => {
    return (
            <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 m-5">
                            <form class="row shadow-lg p-3" novalidate>
                                <div class="m-2">
                                    <h1 class="">Unos datos más y Serás Socia</h1>
                                </div>

                                <div class="col-md-12 m-2">
                                    <div class="row">

                                        <div class="col">
                                            <label for="nombreInput" class="form-label">Nombre <span class="text-danger">*</span></label>
                                            <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Ingrese su nombre"
                                            id="nombreInput"
                                            required
                                            />
                                        </div>

                                        <div class="col">
                                            <label for="apellidoInput" class="form-label">Apellido <span class="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Ingrese su apellido"
                                                id="apellidoInput"
                                                required
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-12 m-2">
                                    <div class="row">

                                        <div class="col">
                                            <label for="rutInput" class="form-label">Rut <span class="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="12345678-9"
                                                id="rutInput"
                                                required
                                            />
                                        </div>

                                        <div class="col">
                                            <label for="telefonoInput" class="form-label">Teléfono <span class="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="912345678"
                                                id="telefonoInput"
                                                required
                                            />
                                        </div>

                                        <div class="col">
                                            <label for="redsocialInput" class="form-label">Red Social <span class="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="@Usuario"
                                                id="redsocialInput"
                                                required
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-12 m-2">
                                    <div class="mt-3">
                                        <h5 class="">¿Que temas o intereses te gustaria aprender o conocer? <span class="text-danger">*</span></h5>
                                    </div>
                                    <div class="row">

                                        <div class="col">
                                            <select name="" id="" class="form-select" required>
                                                <option value="">Escoge uno </option>
                                                <option value="1">Tecnología</option>
                                                <option value="2">Artesanía</option>
                                                <option value="3">Servicios del hogar</option>
                                                <option value="4">Servicios de mantención</option>
                                                <option value="5">Servicios de alimentación</option>
                                                <option value="6">Contabilidad</option>
                                                <option value="7">Finanzas</option>
                                                <option value="8">Administración</option>
                                                <option value="9">Aprender publicidad</option>
                                                <option value="10">Construcción</option>
                                                <option value="11">Turismo</option>
                                                <option value="12">Psicología</option>
                                                <option value="13">Calidad de vida</option>
                                                <option value="14">Usar mejor mi tiempo</option>
                                                <option value="15">Usar mejor el computador</option>
                                                <option value="16">Usar mejor el correo</option>
                                                <option value="17">Usar mejor redes sociales</option>
                                                <option value="18">Aprender publicidad</option>
                                                <option value="19">Postulación a fondos</option>
                                                <option value="20">Formalización de negocios</option>
                                                <option value="21">Como tener más clientes</option>
                                                <option value="22">Como fijar precios</option>
                                                <option value="23">Reciclaje</option>
                                                <option value="24">Manualidades</option>
                                                <option value="25">Administrar el dinero</option>
                                                <option value="26">Administrar el tiempo</option>
                                            </select>
                                        </div>

                                        <div class="col">
                                                <select name="" id="" class="form-select" required>
                                                <option value="">Escoge uno </option>
                                                <option value="1">Tecnología</option>
                                                <option value="2">Artesanía</option>
                                                <option value="3">Servicios del hogar</option>
                                                <option value="4">Servicios de mantención</option>
                                                <option value="5">Servicios de alimentación</option>
                                                <option value="6">Contabilidad</option>
                                                <option value="7">Finanzas</option>
                                                <option value="8">Administración</option>
                                                <option value="9">Aprender publicidad</option>
                                                <option value="10">Construcción</option>
                                                <option value="11">Turismo</option>
                                                <option value="12">Psicología</option>
                                                <option value="13">Calidad de vida</option>
                                                <option value="14">Usar mejor mi tiempo</option>
                                                <option value="15">Usar mejor el computador</option>
                                                <option value="16">Usar mejor el correo</option>
                                                <option value="17">Usar mejor redes sociales</option>
                                                <option value="18">Aprender publicidad</option>
                                                <option value="19">Postulación a fondos</option>
                                                <option value="20">Formalización de negocios</option>
                                                <option value="21">Como tener más clientes</option>
                                                <option value="22">Como fijar precios</option>
                                                <option value="23">Reciclaje</option>
                                                <option value="24">Manualidades</option>
                                                <option value="25">Administrar el dinero</option>
                                                <option value="26">Administrar el tiempo</option>
                                            </select>
                                        </div>
                                        
                                        <div class="col">
                                            <select name="" id="" class="form-select" required>
                                                <option value="">Escoge uno </option>
                                                <option value="1">Tecnología</option>
                                                <option value="2">Artesanía</option>
                                                <option value="3">Servicios del hogar</option>
                                                <option value="4">Servicios de mantención</option>
                                                <option value="5">Servicios de alimentación</option>
                                                <option value="6">Contabilidad</option>
                                                <option value="7">Finanzas</option>
                                                <option value="8">Administración</option>
                                                <option value="9">Aprender publicidad</option>
                                                <option value="10">Construcción</option>
                                                <option value="11">Turismo</option>
                                                <option value="12">Psicología</option>
                                                <option value="13">Calidad de vida</option>
                                                <option value="14">Usar mejor mi tiempo</option>
                                                <option value="15">Usar mejor el computador</option>
                                                <option value="16">Usar mejor el correo</option>
                                                <option value="17">Usar mejor redes sociales</option>
                                                <option value="18">Aprender publicidad</option>
                                                <option value="19">Postulación a fondos</option>
                                                <option value="20">Formalización de negocios</option>
                                                <option value="21">Como tener más clientes</option>
                                                <option value="22">Como fijar precios</option>
                                                <option value="23">Reciclaje</option>
                                                <option value="24">Manualidades</option>
                                                <option value="25">Administrar el dinero</option>
                                                <option value="26">Administrar el tiempo</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-12 m-2">
                                    <div class="mt-3">
                                        <h5 class="">Queremos que te conozcan <span class="text-danger">*</span></h5>
                                    </div>
                                        <textarea
                                            class="form-control"
                                            name=""
                                            placeholder="Tu descripción "
                                            id=""
                                            cols="30"
                                            rows="10"
                                            required
                                        ></textarea>
                                </div>
                                
                                <div class="col-md-12 m-2">
                                    <h5>Inserta tu foto de Perfil <span class="text-danger">*</span></h5>
                                    <input type="file" name="foto" id="imagenInput" required/>
                                </div>

                                <div class="col-md-12 m-2">
                                    <button id="submitBtn" class="btn btn-primary" type="submit">
                                    Enviar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export { FormRegister }