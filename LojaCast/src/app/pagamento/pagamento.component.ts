import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder ,Validators, FormGroup } from '@angular/forms';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface Estado{
  nome:String;
  sigla:String;
}

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class PagamentoComponent implements OnInit {
  enderecoFormControl = new FormControl('', [Validators.required, Validators.maxLength(60)]);
  numeroFormControl = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  cidadeFormControl = new FormControl('', [Validators.required, Validators.maxLength(60)]);
  bairroFormControl = new FormControl('', [Validators.required, Validators.maxLength(60)]);
  cepFormControl = new FormControl('', [Validators.required, Validators.maxLength(8)]);
  estadoControl = new FormControl('', Validators.required);
  cartaoDeCreditoFormControl = new FormControl('', Validators.required);
  cvcFormControl = new FormControl('', Validators.required);
  cpfBoletoFormControl = new FormControl('', Validators.required);
  nomeBoletoFormControl = new FormControl('', Validators.required);
  nomeCartaoFormControl = new FormControl('', Validators.required);
  dateFormControl = new FormControl('', Validators.required);


  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  panelOpenState = false;

  estados: Estado[] = [
    {nome: "Acre", sigla: "AC"},
    {nome: "Alagoas", sigla: "AL"},
    {nome: "Amapá", sigla: "AP"},
    {nome: "Amazonas", sigla: "AM"},
    {nome: "Bahia", sigla: "BA"},
    {nome: "Ceará", sigla: "CE"},
    {nome: "Distrito Federal", sigla: "DF"},
    {nome: "Espírito Santo", sigla: "ES"},
    {nome: "Goiás", sigla: "GO"},
    {nome: "Maranhão", sigla: "MA"},
    {nome: "Mato Grosso", sigla: "MT"},
    {nome: "Mato Grosso do Sul", sigla: "MS"},
    {nome: "Minas Gerais", sigla: "MG"},
    {nome: "Pará", sigla: "PA"},
    {nome: "Paraíba", sigla: "PB"},
    {nome: "Paraná", sigla: "PR"},
    {nome: "Pernambuco", sigla: "PE"},
    {nome: "Piauí", sigla: "PI"},
    {nome: "Rio de Janeiro", sigla: "RJ"},
    {nome: "Rio Grande do Norte", sigla: "RN"},
    {nome: "Rio Grande do Sul", sigla: "RS"},
    {nome: "Rondônia", sigla: "RO"},
    {nome: "Roraima", sigla: "RR"},
    {nome: "Santa Catarina", sigla: "SC"},
    {nome: "São Paulo", sigla: "SP"},
    {nome: "Sergipe", sigla: "SE"},
    {nome: "Tocantins", sigla: "TO"}
  ];


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }


  finalizarCompra(){}

}
