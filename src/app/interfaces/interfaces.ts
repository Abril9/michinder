export interface Contacto{
    email: string,    
    instagram?: string,
    facebook?: string,
    twitter?: string,
    telefono?: string,
}

export interface Usuario{
    usuario: string,
    password: string,
    contacto: Contacto
    fechaLogin: Date,
    fechaCierre?: Date,
    avatarPath: string
}

export interface Persona{
    usuario: Usuario,
    nombre: string,
    apellido: string,
    direccion?: string,
}

export interface Admin{
    privilegios: number,
}

export interface EstadoBusqueda{
    estado: string,
    idEstado: number
}

export interface Busqueda{
    pathImagen: string,
    titulo:string,
    descripcion: string, 
    autor: Persona,
    estado: EstadoBusqueda,
    fechaAlta: Date,
    fechaBaja: Date | undefined,
}

export interface EstadoEncuentro{
    estado: string,
    idEstado: number
}
export interface Encuentro{
    pathImagen: string,
    titulo:string,
    descripcion: string, 
    autor: Persona,
    estado: EstadoEncuentro,
    fechaAlta: Date,
    fechaBaja: Date | undefined,
}

export interface Datos{
    cuerpo: string 
}
