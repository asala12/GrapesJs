import fontIcon from "../icons/font-solid.svg";

export const TextBlock = (bm, label) => {
    bm.add('text', {
        label: `
           <img src=  "${fontIcon}"/>
            <div>${label}</div>
        `,
        category: 'Typography',
        content: {
            type:'text',
            content: 'Insert your text here'
        }
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const textType = domc.getType('text');
    const textView = textType.view;

    domc.addType('text', {
         extend: 'text',
        model:({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'Text',
                tagName: 'div',
                droppable: true,
                editable: true
            })
        }, {
            /*isComponent(el) {
              if(el && el.dataset && el.dataset.bsText) {
                return {type: 'text'};
              }
            }*/
        }),
        view: textView
    });
}
