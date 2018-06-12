app.controller('main.index', [
    '$scope', '$http', function ($scope, $http) {
        var vm = this;
        vm.currentLaw = null;
        vm.selectedLawNumber = ""

        vm.validateLawNumber = function () {
            if (vm.selectedLawNumber == '' || !isNumeric(vm.selectedLawNumber)) {
                console.log(vm.selectedLawNumber);
                alertify
                    .alert('Erro', "Você precisa digitar um código válido (apenas números)", function () {
                    });
                return;
            }

            var rlArt = vm.currentLaw.number.match(/\d/g).join('');
            if (rlArt == vm.selectedLawNumber) {
                alertify
                    .alert('Sucesso', "Parabéns! você acertou, clique em ok para ir para a próxima lei", function () {
                        $scope.$apply(function () {
                            vm.nextLaw();
                        });
                    });
            } else {
                alertify
                    .alert('Erro', "Você errou, tente novamente", function () {
                    });
            }

        }

        vm.nextLaw = function () {
            var to = civilCode.length;
            var newLaw = Math.floor(Math.random() * to) + 1;
            vm.currentLaw = civilCode[newLaw];
            vm.selectedLawNumber = '';
        }

        vm.load = function () {
        }

        vm.load();
    }
]);

function isNumeric(num) {
    return !isNaN(num)
}