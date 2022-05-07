> ### PEC5_Ej3
>
> a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?
>
> - FormControl: Realiza un seguimiento del valor y el estado de validación de un control de formulario individual. Este es uno de los tres bloques de construcción fundamentales de los formularios de angular, junto con FormGroup y FormArray.
>
> - FormGroup: Realiza un seguimiento del valor y el estado de validez de un grupo de instancias de FormControl. Un FormGroup agrega los valores de cada FormControl secundario en un objeto, con cada nombre de control como clave. Calcula su estado reduciendo los valores de estado de sus hijos. Por ejemplo, si uno de los controles de un grupo no es válido, todo el grupo deja de serlo.
>
> - FormBuilder: Crea un AbstractControl a partir de una configuración especificada por el usuario. FormBuilder proporciona azúcar sintáctico que acorta la creación de instancias de FormControl, FormGroup o FormArray. Reduce la cantidad de repetitivo necesario para construir formularios complejos.
>
> b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.
>
> - required
> - email
> - minLength
> - maxLength
> - pattern
> - Estado del input: $untouched, $touched, $pristine, $dirty, $invalid, $valid
> - Estado del formulario: $pristine, $dirty, $invalid, $valid, $submitted
> - CSS classes: ng-untouched, ng-touched, ng-pristine, ng-dirty, ng-valid, ng-invalid, ng-valid-key, ng-invalid-key
> - Validación personalizada.
>
> c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?
>
> Los formularios y controles reactivos están gestionados por máquinas de estados que determinan en todo momento la situación de cada control y del formulario en sí mismo.
>
> El estado inicial del formulario es invalido. Se puede acceder al estado del formulario a través del atributo status, y al valor de los controles del formulario con el atributo value ambos pertenecientes a la clase FormGroup.
>
> Estados de validación: 
>
> - Valid: El control ha pasado todos los chequeos.
> - Invalid: El control ha fallado al menos en una regla.
> - Pending: El control está en medio de un proceso de validación.
> - Disabled: El control está desactivado y exento de validación.
>
> Estados de modificación: 
>
> - Pristine: El valor del control no ha sido cambiado por el usuario.
> - Dirty: El usuario ha modificado el valor del control.
> - Touched: El usuario ha tocado el control lanzando un evento blur al salir.
> - Untouched: El usuario no ha tocado y salido del control lanzando ningún evento blur.