/* ID'S
 * #img-obj - <img> imagem do objeto
 * #tipo-obj - <span> tipo de objeto
 * #categoria-obj - <span> categoria do objeto
 * #nome-obj - <h3> nome do objeto
 * #date-obj - <span> data do objeto
 * #local-obj - <span> data do objeto
 * #desc-obj - <p> descrição do objeto
 * 
 * #img-user - <img> imagem do usuário responsável por criar objeto
 * #icone-user - <i> ícone padrão quando não tiver foto
 * #nome-user - <span> nome do usuário responsável por criar objeto
 * #email-user - <span> email do usuário  responsável por criar objeto
 * #tel-user - <span> telefone do usuário  responsável por criar objeto
 * #tipo-user - <span> tipo de usuário  responsável por criar objeto
 * #estado-user - <span> estado do usuário  responsável por criar objeto
 * #cidade-user - <span> cidade do usuário  responsável por criar objeto
 * #bairro-user - <span> bairro do usuário  responsável por criar objeto
 * 
 * #btn-delete - <button> botão de deletar objeto
 */

function deleteObj(){
    
}

const urlParams = new URLSearchParams(window.location.search);
const idObj = urlParams.get("id") // pega id do objeto selecionado
