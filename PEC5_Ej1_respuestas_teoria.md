> ### PEC5_Ej1
>
> a) ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?
>
> - Los formularios basados ​​en plantillas utilizan el “FormsModule”, mientras que los formularios reactivos se basan en “ReactiveFormsModule”.
>
> - Los formularios basados ​​en plantillas son de naturaleza asincrónica, mientras que los formularios reactivos son en su mayoría sincrónicos.
>
> - En un enfoque basado en plantillas, la mayor parte de la lógica se basa en la plantilla, mientras que en el enfoque basado en reactivos, la lógica reside principalmente en el componente.
>
> b) ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?
>
> ngModel es una funcionalidad que se encuentra dentro del paquete FormsModule, que a su vez se encuentra dentro del módulo @angular/forms. Lo que hace es crear una instancia de FormControl a partir de un modelo de dominio y la vincula a un elemento de control de formulario.
> 
> c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?
>
> Hay tres estados posibles:
>
> - El control ha sido visitado  ----->  ng-touched - ng-untouched
>
> - El valor del control ha cambiado ->  ng-dirty --- ng-pristine
>
> - El valor del  control es válido -->  ng-valid --- ng-invalid
>
> d) ¿Qué ventajas aportan los FormGroup en la composición de formularios?
>
> Un FormGroup rastrea el valor y el estado de validez de un grupo de instancias de FormControl y un FormControl es un objeto qué se usa en los formularios para tener un control sobre su valor y su estado en el formulario. 
>
> Los FormGroup facilitan la validación de los parámetos y el estado de los mismos, haciendo que el código sea mucho más visual y limpio.
>
> Permiten agrupar los controles visuales que se les asocian un objeto de la clase FormControl a cada uno.