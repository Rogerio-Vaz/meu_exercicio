function limpar_labels(){
    document.getElementById('produto_imagem').innerHTML = '<img src="./images/none.png" alt="" id="produto_imagem">';
    document.getElementById('produto_nome_label').innerHTML = '';
    document.getElementById('produto_valor_unit_label').innerHTML = '';
    document.getElementById('produto_quant_label').innerHTML = '';
    document.getElementById('produto_valor_total_label').innerHTML = '';
}
function selecionar_produto(){
    limpar_labels();
    nomes = ['banana', 'laranja', 'maca']
    produtos_nomes = ['Banana (Kg)', 'Laranja (Kg)', 'Maçã (Kg)']
    produtos_precos = [3.5, 4.5, 5.5]
    document.getElementById('produto_quant').value = "";
    const produto_nome = document.getElementById("produto_nome").value;
    if (produto_nome.length > 0){
        document.getElementById('produto_imagem').innerHTML = '<img src="./images/' + produto_nome + '.png" alt="" id="produto_imagem">';
        document.getElementById('produto_nome_label').innerHTML = produtos_nomes[nomes.indexOf(produto_nome)];
        produto_valor_unit = produtos_precos[nomes.indexOf(produto_nome)];
        document.getElementById('produto_valor_unit_label').innerHTML = 'V. Unit. ' + produto_valor_unit.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }else{
        limpar_labels();
    }
}

function definir_quant(){
    nomes = ['banana', 'laranja', 'maca']
    produtos_nomes = ['Banana (Kg)', 'Laranja (Kg)', 'Maçã (Kg)']
    produtos_precos = [3.5, 4.5, 5.5]
    const produto_quant = document.getElementById('produto_quant').value;
    const produto_nome = document.getElementById("produto_nome").value;
    produto_valor_unit = produtos_precos[nomes.indexOf(produto_nome)];
    if (produto_quant.length > 0 && produto_nome.length > 0){
        document.getElementById('produto_quant_label').innerHTML = produto_quant + ' unidade(s)';
        document.getElementById('produto_valor_total_label').innerHTML = 'V. Total ' + (produto_valor_unit*produto_quant).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}

function adicionar_produto(){
    const produto_nome = document.getElementById("produto_nome").value;
    const produto_quant = document.getElementById("produto_quant").value;
    if (produto_nome.length > 0 && produto_quant.length > 0){
        nomes = ['banana', 'laranja', 'maca']
        produtos_nomes = ['Banana (Kg)', 'Laranja (Kg)', 'Maçã (Kg)']
        produtos_precos = [3.5, 4.5, 5.5]
        produto_nome_correto = produtos_nomes[nomes.indexOf(produto_nome)];
        produto_valor_unit = produtos_precos[nomes.indexOf(produto_nome)];
        produto_valor_total = produto_valor_unit * produto_quant;
        //console.log(produto_quant, produto_nome_correto, produto_valor_total);
        let tabela = document.getElementById("carrinho");
        var linha = tabela.insertRow(0);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var celula3 = linha.insertCell(2);
        celula1.innerHTML = produto_quant;
        celula2.innerHTML = produto_nome_correto;
        celula3.innerHTML = produto_valor_total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        limpar_labels();
        document.getElementById("produto_nome").value = '';
        document.getElementById("produto_quant").value = '';
        document.getElementById("produto_nome").focus();
        var acumulado = document.getElementById("total_geral_valor").textContent;
        acumulado = acumulado.replace(",", "");
        acumulado = parseFloat(acumulado);
        
        document.getElementById("total_geral_valor").innerHTML = (acumulado + produto_valor_total);
        console.log(acumulado + produto_valor_total);
        //document.getElementById("total_geral_valor").innerHTML = (acumulado + produto_valor_total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
        //var novo_valor = (acumulado + parseFloat(produto_valor_total));
        //console.log(novo_valor);
        //document.getElementById("total_geral_valor").innerHTML = (acumulado).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        //document.getElementById("total_geral").value = 
    }
    
    
    //const lista = document.getElementById("carrinho");
    //const item = document.createElement("li");

    /*const obj = {
        nome: nome,
        quantidade: quantidade,
        preco: preco
    }

    item.textContent = `nome: ${obj.nome} quantidade: ${obj.quantidade} preço: ${obj.preco} total: ${obj.quantidade*obj.preco}`;
    // for(var index in obj){
    //     item.textContent+= index + ":" + obj[index]+" ";
    // }

    lista.appendChild(item);

    console.log(`${nome} ${quantidade} ${preco}`);
    */
}