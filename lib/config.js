'use strict';

var API_TOKEN = 'BQANXUb3o8YUs7ADsZdkhQN6jLfgba2bZku0ilbVUdslBVF4Nq-1XPlaInPjEQ5IbjnhZQocJXYUwP_K-gBlZsuXxwOgiDZsW-8ROcZtZvSLlzt22M5Kl8dUX_40Sd1X-dHuLef_7TdZCgv_KucU2_sLVn5mHbKq0CKRrfc1RfSGCoWOgq8bYhwG7lc4qfZJRKLgl3VQD-H6XkZ66p1p3jVXsJa5iI042mzSG3fjBwfDzNZN_eKQUvcherVMuUzpRmXBZFrfc9ODNUj-4pCn5_BD';
var API_URL = 'https://api.spotify.com/v1';
var HEADERS = {
  headers: {
    Authorization: 'Bearer ' + API_TOKEN
  }
};

exports.modules = { API_URL: API_URL, HEADERS: HEADERS };