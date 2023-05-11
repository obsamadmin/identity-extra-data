package br.unb.obsam;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Locale;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import org.exoplatform.commons.utils.ListAccess;
import org.exoplatform.samples.birthday.MyConnectionsBirthdayRESTService;
import org.exoplatform.services.log.ExoLogger;
import org.exoplatform.services.log.Log;
import org.exoplatform.services.rest.resource.ResourceContainer;
import org.exoplatform.social.core.identity.model.Identity;
import org.exoplatform.social.core.identity.model.Profile;
import org.exoplatform.social.core.manager.IdentityManager;
import org.exoplatform.social.core.manager.RelationshipManager;
import org.json.JSONArray;
import org.json.JSONObject;
@Path("identity/extraData") 
public class IdentityExtraDataRestService implements ResourceContainer {
	  // Logger for our class
	  private static final Log LOG = ExoLogger.getLogger(MyConnectionsBirthdayRESTService.class);

	  // Serviço nativo do módulo social importado pelo POM para carregar os identities (usuários)
	  private IdentityManager identityManager;


	  private static final DateTimeFormatter PARSER = DateTimeFormatter
	          .ofPattern("yyyy-MM-dd", Locale.getDefault());

	  private static String BIRTHDAY_PROPERTY = "birthday";

	  public IdentityExtraDataRestService(IdentityManager identityManager) {
	    this.identityManager = identityManager;
	  }

	  @GET
	  @RolesAllowed("users")
	  public Response getMyExtraData(@Context SecurityContext securityContext) {

		// Carregando o usuário logado
	    String authenticatedUserName = securityContext.getUserPrincipal().getName();
	    try {
	      // Carrega o identity do usuário logado
	      Identity authenticatedUser = identityManager.getOrCreateUserIdentity(authenticatedUserName);
	      // Carrega a lista de conexões do usuário
	     // ListAccess<Identity> connections = relationshipManager.getConnections(authenticatedUser);
	      //Identity[] connectionsIdentities = connections.load(0, connections.getSize());

	      // Cria um array JSON de respostas com os usuários conectados e as respectivas datas de aniversários
	      JSONArray jsonArray = new JSONArray();
	      /*for (Identity connection : connectionsIdentities) {
	        JSONObject connectionJSON = new JSONObject();
	        connectionJSON.put("userName", connection.getRemoteId());
	        connectionJSON.put("fullName", connection.getProfile().getFullName());
	        connectionJSON.put("avatar", connection.getProfile().getAvatarUrl());
	        connectionJSON.put(BIRTHDAY_PROPERTY, connection.getProfile().getProperty(BIRTHDAY_PROPERTY));
	        jsonArray.put(connectionJSON);
	      }*/

	      // Se estiver tudo correto,retorna o Array
	      return Response.ok(jsonArray.toString()).build();
	    } catch (Exception e) {
	      // Se estiver errado, retorna uma mensagem de erro
	      LOG.error("Error obtendo conexão com{}", authenticatedUserName, e);
	      return Response.serverError().build();
	    }
	  }

	  //Função para atualizar a data de aniversário do próprio usuário
	  @POST
	  @RolesAllowed("users")
	  public Response updateExtraDate(@Context SecurityContext securityContext, @FormParam("birthday") String birthday,@FormParam("userName") String userName) {
	    String authenticatedUserName = securityContext.getUserPrincipal().getName();
	    if(!authenticatedUserName.equalsIgnoreCase(userName)) {
	      // Somente o usuário pode atualizar a própria data de aniversário
	      LOG.error("{} não foi possível atualizar o aniversário de {}", authenticatedUserName, userName);
	      return Response.status(Response.Status.FORBIDDEN).build();
	    }
	    try {
	      // Verifica se a Data está no formato correto
	      LocalDate.parse(birthday, PARSER);
	      // Obtém o Identity do usuário logado
	      Identity authenticatedUser = identityManager.getOrCreateUserIdentity(authenticatedUserName);
	      Profile authenticatedUserProfile = authenticatedUser.getProfile();
	      // Seta a data de aniversário no propriedade do usuário
	      authenticatedUserProfile.setProperty(BIRTHDAY_PROPERTY, birthday);
	      identityManager.updateProfile(authenticatedUserProfile);
	      // Prepara um retorno com a data de aniversário atualizada
	      JSONObject jsonObject = new JSONObject();
	      jsonObject.put("userName", authenticatedUser.getRemoteId());
	      jsonObject.put("fullName", authenticatedUserProfile.getFullName());
	      jsonObject.put("avatar", authenticatedUserProfile.getAvatarUrl());
	      jsonObject.put(BIRTHDAY_PROPERTY, authenticatedUserProfile.getProperty(BIRTHDAY_PROPERTY));
	      return Response.ok(jsonObject.toString()).build();
	    } catch (DateTimeParseException ex) {
	      LOG.error("Could not parse date {}", birthday, ex);
	      return Response.serverError().build();
	    } catch (Exception e) {
	      LOG.error("Could not update profile of user {}", authenticatedUserName, e);
	      return Response.serverError().build();
	    }
	  }
	}