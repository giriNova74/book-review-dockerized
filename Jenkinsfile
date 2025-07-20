pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
  }

  stages {
    stage('Clone Repo') {
      steps {
        git url: 'https://github.com/giriNova74/book-review-dockerized.git', credentialsId: 'github-creds'
      }
    }

    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'docker build -t giriprasad74/backend:latest .'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'docker build -t giriprasad74/frontend:latest .'
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
        sh 'docker push giriprasad74/backend:latest'
        sh 'docker push giriprasad74/frontend:latest'
      }
    }
  }

  post {
    failure {
      echo '❌ Build failed.'
    }
    success {
      echo '✅ Build and push successful.'
    }
  }
}
