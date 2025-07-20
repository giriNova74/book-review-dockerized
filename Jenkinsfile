pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
  }
  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/giriNova74/book-review-dockerized.git', branch: 'main', credentialsId: 'github-creds'
      }
    }
    stage('Use Minikube Docker') {
      steps {
        sh 'eval $(minikube docker-env)'
      }
    }
    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'eval $(minikube docker-env) && docker build -t bookreview-backend:latest .'
        }
      }
    }
    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'eval $(minikube docker-env) && docker build -t bookreview-frontend:latest .'
        }
      }
    }
  }
}
