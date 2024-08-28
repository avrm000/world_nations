


function weighted_random_choice_from_list_function(lista_da_cui_sorteggiare, lista_probabilita_per_parole_nella_lista){

    var somma_totale_probabilita = 0;

    lista_probabilita_per_parole_nella_lista.forEach(element => {
        somma_totale_probabilita += element;
    });

    var numero_casuale_nel_range_somma_probabilita = Math.random()*somma_totale_probabilita;


    var somma_per_ciclo_for = 0; 

    for (var x = 0; x < lista_da_cui_sorteggiare.length; x++) {
        
        somma_per_ciclo_for += lista_probabilita_per_parole_nella_lista[x];
        
        if (somma_per_ciclo_for >= numero_casuale_nel_range_somma_probabilita){
            return [x, lista_da_cui_sorteggiare[x]];
        }

    }

}