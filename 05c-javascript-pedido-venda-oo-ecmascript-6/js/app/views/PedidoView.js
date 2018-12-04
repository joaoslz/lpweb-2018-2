class PedidoView {

    constructor(elementoAlvo) {
        this._elemento = elementoAlvo;
    }

    _template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.itens.map(item => `
                    
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.subTotal}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>

            <tfoot>
              <td colspan="3"></td>
                 <td>${
                       ( function () {
                         let total = 0;
                         model.itens.forEach(item => total += item.subTotal );
                         return total;
                         })()
                    }
             </td>
            </tfoot>

            <tfoot>
             <td colspan="3"></td>
             <td>
                ${model.itens
                       .reduce(function(total, item) {
                            return total + item.subTotal;
                       }, 0.0)
                  }
            </td>
           </tfoot>
                  
           <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.itens.reduce((total, item) => total + item.subTotal, 0.0)}
                </td>
            </tfoot>
            
        </table>
        `;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}
