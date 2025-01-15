export default {
  auth: {
      domain: "dev-wxooz13q8583k261.us.auth0.com",
      clientId: "uJzUJ3x2MRUl2sdXzgk1Ij4YcID4ueLl",
      authorizationParams: {
          redirect_uri: "http://localhost:4200/login/callback",
          audience: "http://localhost:8080",
        },
  },
  httpInterceptor: {
      allowedList:
['http://localhost:8080/api/orders/**','http://localhost:8080/api/checkout/purchase'],
  },
}
