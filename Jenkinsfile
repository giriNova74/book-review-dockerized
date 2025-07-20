pipeline {
  agent any

  environment {
    DOCKER_HUB_REPO_BACKEND = 'giriprasad74/backend:latest'
    DOCKER_HUB_REPO_FRONTEND = 'giriprasad74/frontend:latest'
  }

  stages {
    stage('Checkout SCM') {
      steps {
        checkout scm
      }
    }

    stage('Checkout Code') {
      steps {
        git url: 'https://github.com/giriNova74/book-review-dockerized.git', branch: 'main', credentialsId: 'github-creds'
      }
    }

    stage('Use Minikube Docker') {
      steps {
        script {
          def status = sh(script: "minikube status --format '{{.Host}}'", returnStdout: true).trim()
          if (status != "Running") {
            echo "Minikube not running. Starting Minikube..."
            sh 'minikube start --driver=docker'
          }
        }
        sh 'eval $(minikube -p minikube docker-env)'
      }
    }

    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'docker build -t $DOCKER_HUB_REPO_BACKEND .'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'docker build -t $DOCKER_HUB_REPO_FRONTEND .'
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh """
            echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
            docker push $DOCKER_HUB_REPO_BACKEND
            docker push $DOC
