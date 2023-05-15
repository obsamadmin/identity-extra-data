package org.exoplatform.samples.birthday;

import org.exoplatform.commons.utils.ListAccess;
import org.exoplatform.services.log.ExoLogger;
import org.exoplatform.services.log.Log;
import org.exoplatform.services.rest.resource.ResourceContainer;
import org.exoplatform.social.core.identity.model.Identity;
import org.exoplatform.social.core.identity.model.Profile;
import org.exoplatform.social.core.manager.IdentityManager;
import org.exoplatform.social.core.manager.RelationshipManager;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Locale;

@Path("connections/birthday") //Access path to our REST service
public class MyConnectionsBirthdayRESTService implements ResourceContainer {
  // Logger for our class
  private static final Log LOG = ExoLogger.getLogger(MyConnectionsBirthdayRESTService.class);

  // Serviço nativo do módulo social importado pelo POM para carregar os identities (usuários)
  private IdentityManager identityManager;

  // Serviço nativo do módulo social importado pelo POM para administrar as relações entre usuários
  private RelationshipManager relationshipManager;

  private static final DateTimeFormatter PARSER = DateTimeFormatter
          .ofPattern("yyyy-MM-dd", Locale.getDefault());

  private static String BIRTHDAY_PROPERTY = "birthday";

  public MyConnectionsBirthdayRESTService(IdentityManager identityManager, RelationshipManager relationshipManager) {
    this.identityManager = identityManager;
    this.relationshipManager = relationshipManager;
  }

  @GET
  @RolesAllowed("users")
  public Response getMyConnectionsBirthday(@Context SecurityContext securityContext) {

	// Carregando o usuário logado
    String authenticatedUserName = securityContext.getUserPrincipal().getName();
    try {
      // Carrega o identity do usuário logado
      Identity authenticatedUser = identityManager.getOrCreateUserIdentity(authenticatedUserName);
      // Carrega a lista de conexões do usuário
      ListAccess<Identity> connections = relationshipManager.getConnections(authenticatedUser);
      Identity[] connectionsIdentities = connections.load(0, connections.getSize());
      Profile authenticatedUserProfile = authenticatedUser.getProfile();

      // Cria um array JSON de respostas com os usuários conectados e as respectivas datas de aniversários
      JSONObject jsonObjectReturn = new JSONObject();
      jsonObjectReturn.put("connections", new JSONArray());
      for (Identity connection : connectionsIdentities) {
        JSONObject connectionJSON = new JSONObject();
        connectionJSON.put("userName", connection.getRemoteId());
        connectionJSON.put("fullName", connection.getProfile().getFullName());
        connectionJSON.put("avatar", connection.getProfile().getAvatarUrl());
        connectionJSON.put(BIRTHDAY_PROPERTY, connection.getProfile().getProperty(BIRTHDAY_PROPERTY));
        System.out.print(connection.getProfile());
        ((JSONArray)jsonObjectReturn.get("connections")).put(connectionJSON);
      }
      if(authenticatedUserProfile.contains(BIRTHDAY_PROPERTY))
    	  jsonObjectReturn.put("myBirthday", authenticatedUserProfile.getProperty(BIRTHDAY_PROPERTY));

      // Se estiver tudo correto,retorna o Array
      return Response.ok(jsonObjectReturn.toString()).build();
    } catch (Exception e) {
      // Se estiver errado, retorna uma mensagem de erro
      LOG.error("Error obtendo conexão com{}", authenticatedUserName, e);
      return Response.serverError().build();
    }
  }


  //Função para atualizar a data de aniversário do próprio usuário
  @POST
  @RolesAllowed("users")
  public Response updateBirthday(@Context SecurityContext securityContext, @FormParam("birthday") String birthday,@FormParam("userName") String userName) {
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
