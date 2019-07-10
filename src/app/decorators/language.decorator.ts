export function Language(): PropertyDecorator {

    function DecoratorFactory(target: any): void {

        const targetNgOnInit: () => void = target.ngOnInit;

        function ngOnInit(this: any): void {
            console.log('onInit');

            if (targetNgOnInit) {
                targetNgOnInit.apply(this);
            }
        }

        target.ngOnInit = ngOnInit;
    }

    return DecoratorFactory;
}
