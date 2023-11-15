export const ListBlock = (bm, label) => {
    bm.add('list', {
        label: label,
        category: 'Basic',
        attributes: {class:'fa fa-list'},
        content: {
            type: 'list',
            content:`
             <h2>My Simple List</h2>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
            `
        }
    });
};

export default (domc) => {
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    domc.addType('list', {
        model: ({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'List',
                tagName: 'ul',
                resizable: 1,
                editable: true,
                traits: [
                    {
                        type: 'select',
                        options: [
                            {value: 'ul', name: 'No'},
                            {value: 'ol', name: 'Yes'}
                        ],
                        label: 'Ordered?',
                        name: 'tagName',
                        changeProp: 1
                    }
                ].concat(defaultModel.prototype.defaults.traits)
            })
        }, {
            isComponent: function(el) {
                if(el && ['UL','OL'].includes(el.tagName)) {
                    return {type: 'list'};
                }
            }
        }),
        view: defaultView
    });
}
