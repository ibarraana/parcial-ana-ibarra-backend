## ENUNCIADO DEL PARCIAL

Un hospital necesita modernizar su sistema de gestión de pacientes, médicos y recursos.

Se debe mantener un registro detallado de cada Paciente, identificado por su DNI o número de historia clínica único. Se almacena su nombre completo, fecha de nacimiento, dirección, teléfono y datos de contacto de emergencia. Cada paciente tiene un Historial Médico asociado, que recopila todas sus interacciones significativas.

El hospital está organizado en Departamentos (Cardiología, Pediatría, Cirugía, etc.), cada uno con un nombre y un jefe de departamento (que es un médico). Los Médicos trabajan en el hospital, se identifican por su número de matrícula, y se registran su nombre, especialidad principal y teléfono de contacto. Cada médico pertenece a un departamento principal, aunque puede consultar en otros.

Los pacientes acuden al hospital mediante Citas Médicas. Una cita tiene una fecha, hora, el paciente, el médico que lo atenderá y el departamento donde se realizará. Se debe registrar el motivo de la consulta y, posteriormente, un breve resumen o diagnóstico.

Si un paciente requiere hospitalización, se le asigna una Cama en una Sala de Hospitalización. Las salas pertenecen a un departamento (ej: Sala de Cardiología), tienen un nombre o número, y contienen varias camas. Cada cama tiene un número único dentro de la sala y un estado (libre, ocupada, en mantenimiento). Se debe saber qué paciente ocupa qué cama y desde qué fecha.

Durante la estancia o consulta, se registran los Tratamientos aplicados al paciente (medicamentos administrados, terapias, etc.). Cada tratamiento se describe, se asocia al historial médico del paciente y se anota la fecha y el médico que lo indicó. El personal de Enfermería también es crucial. Cada enfermero/a se identifica por su legajo, tiene nombre y está asignado/a a una o varias salas de hospitalización por turnos. Se necesita saber qué enfermeros están de guardia en qué salas y en qué horarios.

### Resolución por mi parte

Según interpreto, estas serias la tablas y relaciones

PACIENTE
(PK)dniPaciente
nombre
fechaNacimiento
dirección
teléfono
datosContactoEmergencia


HISTORIALMEDICO
(PK)idHistorialMedico
descripción
dniPaciente(FK)

DAPARTAMENTOS
(PK)idDepartamento
nombreDepartamento
jefeDepartamentoId(FK)

ESPECIALIDAD
(PK)codigoEspecialidad
descripcion

MEDICOS
(PK)numeroMatriculaMedico
nombre
codigoEspecialidad(FK)
telefonoConctacto

MEDICOSDEPARTAMENTOS
(PK)numeroMatriculaMedico(FK)
(PK)idDepartamento(FK)


PACIENTESCITASMEDICAS
(PK)idCitaMedica
fechaHora
dniPaciente(FK)
numeroMatriculaMedico(FK)
idDepartamento(FK)
motivoConsulta
diagnosticoResumen

SALA HOSPITALIZACION
(PK)numeroSala
idDepartamento(FK)
nombreSala

ESTADOS
(PK)codigoEstado
descripción

CAMAS
(PK)codigoCama
descripción
codigoEstado(FK)
numeroSala(FK)

ENFERMERO
(PK)codigoEnfermero
nombre

CAMASPACIENTES
(PK)codigoCama(FK)
(PK)dniPaciente(FK)
fechaDesde
fechaHasta

ENFERMEROSALAS
(PK)codigoEnfermero
numeroSala(FK)
horaIngreso
horaEgreso

TRATAMIENTOS
(PK)idHistorialMedico(FK)
(PK)numeroMatriculaMedico(FK)
(PK)codigoEnfermero(FK)
fecha


