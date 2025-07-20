pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds') // Define DockerHub credentials
  }

  stages {

    stage('Checkout Code') {
      steps {
        git branch: 'main',
            url: 'https://github.com/giriNova74/book-review-dockerized.git',
            credentialsId: 'github-creds'
      }
    }

    stage('Build Backend Image') {
      steps {
        dir('backend') {
          script {
            sh 'docker build -t giriprasad74/backend:latest .'
          }
        }
      }
    }

    stage('Build Frontend Image') {
      steps {
        dir('frontend') {
          script {
            sh 'docker build -t giriprasad74/frontend:latest .'
          }
        }
      }
    }

    stage('Push Images to DockerHub') {
      steps {
        script {
          sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"
          sh 'docker push giriprasad74/backend:latest'
          sh 'docker push giriprasad74/frontend:latest'
        }
      }
    }

  }

  post {
    success {
      echo '✅ Build and push completed successfully.'
    }
    failure {
      echo '❌ Build failed.'
    }
  }
}
