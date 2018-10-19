pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                echo "I'm here !"   
            }
        }
    }
    post {
        always {
            echo 'Cleaning workspace...'
            deleteDir() /* clean up our workspace */
        }
    }
}