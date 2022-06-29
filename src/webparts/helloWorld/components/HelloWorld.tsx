import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import * as csstree from 'css-tree';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
    public render(): React.ReactElement<IHelloWorldProps> {
        // parse CSS to AST
        const ast: csstree.CssNode = csstree.parse('.example { world: "!" }');

        // traverse AST and modify it
        csstree.walk(ast, (node) => {
            if (node.type === 'ClassSelector' && node.name === 'example') {
                node.name = 'hello';
            }
        });

        // generate CSS from AST
        console.log(csstree.generate(ast));
        // .hello{world:"!"}
        return <div>Hello World</div>;
    }
}
