const InputTarefa = document.getElementById('InputNomeTarefa');
const BtnCadastrar = document.getElementById('Btncadastrar');
const Tarefas = document.getElementById('Tarefas');

// Cria um elemento lista;
const NewList = () => {
    const li = document.createElement('li');
    return li;
};

//Limpa iinput

const ClearInput = () => {  
    InputTarefa.value = '';
    InputTarefa.focus();
}; 

// Excluir tarefa

const DeletaTarefa = (li) => {
    const btn = document.createElement('button');
    btn.innerText = 'Apagar';
    btn.setAttribute('class', 'deletar')
    li.appendChild(btn);
    btn.addEventListener('click', () => {
        li.remove();
        SalvarTarefas();
    })
};

// Cria uma nova tarefa
const NewTarefa = (Text) => {   
    const li = NewList();
    li.innerText = Text;
    Tarefas.appendChild(li);
    ClearInput();
    DeletaTarefa(li);
    SalvarTarefas();
};


const CadastraTarefa = () => {
    if(!InputTarefa.value) return;
    NewTarefa(InputTarefa.value);
};

const SalvarTarefas = () => {
    let liTarefas = document.querySelectorAll('li');
    let ListaTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaValue = tarefa.innerText;
        tarefaValue = tarefaValue.replace('Apagar', '').trim(); 
        ListaTarefas.push(tarefaValue);
    }

    const tarefaJSON = JSON.stringify(ListaTarefas); 
    localStorage.setItem('tarefasSalvas', tarefaJSON)
};

const MostraTarefas = () => {
    const tarefas = localStorage.getItem('tarefasSalvas');
    const GetLista = JSON.parse(tarefas)
    console.log(GetLista);

    for (let tarefas of GetLista){
        NewTarefa(tarefas)
    }

};

MostraTarefas()