## User customization of language SDKs 
### Add a custom codegen
- if you want to add a kotlin codegen 
- Add custom File
  - src/main/kotlin/caver/kotlin/KlaytnKotlinClientCodegen.kt
- Extend KotlinClientCodegen class 
    ```kotlin
    class KlaytnKotlinClientCodegen : KotlinClientCodegen
    ```
- Add META-INF.services resource
  - Edit src/main/resources/META-INF.services
    ```
    caver.kotlin.KlaytnKotlinClientCodegen
    ```
- Add Test Case
  - Add src/test/kotlin/caver/kotlin/KlaytnKotlinClientCodegenTest.kt 
  - Add Test for ServiceLoader
  ```kotlin
  val loader = ServiceLoader.load(
    CodegenConfig::class.java,
    CodegenConfig::class.java.classLoader
  )
  ```
### deploy
```shell
./gradlew clean :deployJar
./gradlew cleanTest :test
```

## Test
- Using the kotest
- Using Behavior Spec
- locate an index.html and report files in build/reports/test

## Jar file
- Generate jar include a customized code generator class
- This jar file include caver-openapi-generator-cli.jar

