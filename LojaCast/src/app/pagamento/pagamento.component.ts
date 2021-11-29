import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CepService } from '../services/cep.service';
import { Cep } from '../classes/cep';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },

  ],
})

export class PagamentoComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  panelOpenState = false;
  cep = new Cep();
  cepValor!:number

  itens!:any;

  constructor(private _formBuilder: FormBuilder,
    private cepService: CepService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    this.itens = localStorage.getItem('totalItens');

  }

  consultarCep() {
    console.log("requisicao feita");
    this.cepService.consultaCep(this.cepValor).subscribe(res => {
      console.log(res);
      this.cep = res;
    })
  }

  finalizarCompra() { }

  enderecoFormControl = new FormControl('', [Validators.required, Validators.maxLength(60)]);
  numeroFormControl = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  cidadeFormControl = new FormControl('', [Validators.required, Validators.maxLength(60)]);
  bairroFormControl = new FormControl('', [Validators.required, Validators.maxLength(60)]);
  cepFormControl = new FormControl('', [Validators.required, Validators.maxLength(8)]);
  estadoFormControl = new FormControl('', [Validators.required, Validators.maxLength(2)]);
  cartaoDeCreditoFormControl = new FormControl('', Validators.required);
  cvcFormControl = new FormControl('', Validators.required);
  cpfBoletoFormControl = new FormControl('', Validators.required);
  nomeBoletoFormControl = new FormControl('', Validators.required);
  nomeCartaoFormControl = new FormControl('', Validators.required);
  dataCartaoFormControl = new FormControl('', Validators.required);
  mesFormControl = new FormControl('', [Validators.required, Validators.maxLength(3)]);
  anoFormControl = new FormControl('', [Validators.required, Validators.maxLength(3)]);
}
