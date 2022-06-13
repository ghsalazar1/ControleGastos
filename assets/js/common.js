$(document).ready(function() {
    $(".list-group-item").click(function(e){
        var openDangerModal = e.target.attributes['data-open-warning'];
        openDangerModal = (openDangerModal == undefined) ? e.target.parentElement.attributes['data-open-warning'] : openDangerModal;

        if(openDangerModal != undefined && openDangerModal != null && openDangerModal.textContent == 'true'){
            e.preventDefault();
            Swal.fire({
                title: 'Confirmação',
                text: "Tem certeza que deseja remover este item?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#121010',
                cancelButtonText: 'Voltar',
                confirmButtonText: 'Sim, deletar item!',
                allowOutsideClick: false
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Removido!',
                    text: 'Item removido com sucesso.',
                    icon: 'success',
                    confirmButtonColor: '#3fa906'
                  });
                }
            });
        }
    });

    $(".success-register-swal").click(function(e){
        var evt = e
        e.preventDefault();
        Swal.fire({
            title: 'Confirmado!',
            text: 'Item cadastrado com sucesso.',
            icon: 'success',
            confirmButtonColor: '#3fa906',
            allowOutsideClick: false
          }).then((result)=> {
            if (result.isConfirmed) {
              window.location = evt.target.attributes.href.value;
            }
          });
    });

    $(".user-register").click(function(e){
      var evt = e
      e.preventDefault();
      Swal.fire({
          title: 'Confirmado!',
          text: '',
          icon: 'success',
          confirmButtonColor: '#3fa906',
          allowOutsideClick: false
        }).then((result)=> {
          if (result.isConfirmed) {
            window.location = evt.target.attributes.href.value;
          }
        });
    });

    $(".success-edit-swal").click(function(e){
      var evt = e
      e.preventDefault();
      Swal.fire({
          title: 'Confirmado!',
          text: 'Item editado com sucesso.',
          icon: 'success',
          confirmButtonColor: '#3fa906',
          allowOutsideClick: false
        }).then((result)=> {
          if (result.isConfirmed) {
            window.location = evt.target.attributes.href.value;
          }
        });
  });
});