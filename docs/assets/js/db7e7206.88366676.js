"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3192],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||s;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],o={id:"styles",title:"Testing Styles",slug:"testing-styles.html"},i=void 0,p={unversionedId:"framework/styles",id:"framework/styles",title:"Testing Styles",description:"Kotest offers 10 different styles of test layout. Some are inspired from other popular test frameworks to make you feel right at home.",source:"@site/docs/framework/styles.md",sourceDirName:"framework",slug:"/framework/testing-styles.html",permalink:"/docs/next/framework/testing-styles.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/styles.md",tags:[],version:"current",frontMatter:{id:"styles",title:"Testing Styles",slug:"testing-styles.html"},sidebar:"framework",previous:{title:"Writing Tests",permalink:"/docs/next/framework/writing-tests.html"},next:{title:"Enabled Flags",permalink:"/docs/next/framework/conditional/enabled-config-flag.html"}},c={},d=[{value:"Fun Spec",id:"fun-spec",level:2},{value:"String Spec",id:"string-spec",level:2},{value:"Should Spec",id:"should-spec",level:2},{value:"Describe Spec",id:"describe-spec",level:2},{value:"Behavior Spec",id:"behavior-spec",level:2},{value:"Word Spec",id:"word-spec",level:2},{value:"Free Spec",id:"free-spec",level:2},{value:"Feature Spec",id:"feature-spec",level:2},{value:"Expect Spec",id:"expect-spec",level:2},{value:"Annotation Spec",id:"annotation-spec",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Kotest offers 10 different styles of test layout. Some are inspired from other popular test frameworks to make you feel right at home.\nOthers were created just for Kotest."),(0,s.kt)("p",null,"To use Kotest, create a class file that extends one of the test styles. Then inside an ",(0,s.kt)("inlineCode",{parentName:"p"},"init { }")," block,\ncreate your test cases. The following table contains the test styles you can pick from along with examples."),(0,s.kt)("p",null,"There are no functional differences between the styles.\nAll allow the same types of configuration ","\u2014"," threads, tags, etc ","\u2014","\nit is simply a matter of preference how you structure your tests."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Test Style"),(0,s.kt)("th",{parentName:"tr",align:null},"Inspired By"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#fun-spec"},"Fun Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"ScalaTest")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#describe-spec"},"Describe Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"Javascript frameworks and RSpec")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#should-spec"},"Should Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"A Kotest original")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#string-spec"},"String Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"A Kotest original")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#behavior-spec"},"Behavior Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"BDD frameworks")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#free-spec"},"Free Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"ScalaTest")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#word-spec"},"Word Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"ScalaTest")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#feature-spec"},"Feature Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"Cucumber")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#expect-spec"},"Expect Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"A Kotest original")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"#annotation-spec"},"Annotation Spec")),(0,s.kt)("td",{parentName:"tr",align:null},"JUnit")))),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Some teams prefer to mandate usage of a single style, others mix and match. There is no right or wrong - do whatever feels right for your team.")),(0,s.kt)("h2",{id:"fun-spec"},"Fun Spec"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"FunSpec")," allows you to create tests by invoking a function called ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," with a string argument to describe the test,\nand then the test itself as a lambda. If in doubt, this is the style to use."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FunSpec({\n    test("String length should return the length of the string") {\n        "sammy".length shouldBe 5\n        "".length shouldBe 0\n    }\n})\n')),(0,s.kt)("p",null,"Tests can be disabled using the ",(0,s.kt)("inlineCode",{parentName:"p"},"xcontext")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"xtest")," variants (in addition to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FunSpec({\n    context("this outer block is enabled") {\n        xtest("this test is disabled") {\n            // test here\n        }\n    }\n    xcontext("this block is disabled") {\n        test("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,s.kt)("h2",{id:"string-spec"},"String Spec"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"StringSpec")," reduces the syntax to the absolute minimum.\nJust write a string followed by a lambda expression with your test code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : StringSpec({\n    "strings.length should return size of string" {\n        "hello".length shouldBe 5\n    }\n})\n')),(0,s.kt)("p",null,"Adding config to the test."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : StringSpec({\n    "strings.length should return size of string".config(enabled = false, invocations = 3) {\n        "hello".length shouldBe 5\n    }\n})\n')),(0,s.kt)("h2",{id:"should-spec"},"Should Spec"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ShouldSpec")," is similar to fun spec, but uses the keyword ",(0,s.kt)("inlineCode",{parentName:"p"},"should")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec({\n    should("return the length of the string") {\n        "sammy".length shouldBe 5\n        "".length shouldBe 0\n    }\n})\n')),(0,s.kt)("p",null,"Tests can be nested in one or more context blocks as well:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec({\n    context("String.length") {\n        should("return the length of the string") {\n            "sammy".length shouldBe 5\n            "".length shouldBe 0\n        }\n    }\n})\n')),(0,s.kt)("p",null,"Tests can be disabled using the ",(0,s.kt)("inlineCode",{parentName:"p"},"xcontext")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"xshould")," variants (in addition to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec({\n    context("this outer block is enabled") {\n        xshould("this test is disabled") {\n            // test here\n        }\n    }\n    xcontext("this block is disabled") {\n        should("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,s.kt)("h2",{id:"describe-spec"},"Describe Spec"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"DescribeSpec")," offers a style familiar to those from a Ruby or Javascript background, as this testing style\nuses ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," / ",(0,s.kt)("inlineCode",{parentName:"p"},"it")," keywords. Tests must be nested in one or more ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," blocks."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : DescribeSpec({\n    describe("score") {\n        it("start as zero") {\n            // test here\n        }\n        describe("with a strike") {\n            it("adds ten") {\n                // test here\n            }\n            it("carries strike to the next frame") {\n                // test here\n            }\n        }\n\n        describe("for the opposite team") {\n            it("Should negate one score") {\n                // test here\n            }\n        }\n    }\n})\n')),(0,s.kt)("p",null,"Tests can be disabled using the ",(0,s.kt)("inlineCode",{parentName:"p"},"xdescribe")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"xit")," variants (in addition to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : DescribeSpec({\n    describe("this outer block is enabled") {\n        xit("this test is disabled") {\n            // test here\n        }\n    }\n    xdescribe("this block is disabled") {\n        it("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,s.kt)("h2",{id:"behavior-spec"},"Behavior Spec"),(0,s.kt)("p",null,"Popular with people who like to write tests in the ",(0,s.kt)("em",{parentName:"p"},"BDD")," style, ",(0,s.kt)("inlineCode",{parentName:"p"},"BehaviorSpec")," allows you to use ",(0,s.kt)("inlineCode",{parentName:"p"},"given"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"when"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"then"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : BehaviorSpec({\n    given("a broomstick") {\n        `when`("I sit on it") {\n            then("I should be able to fly") {\n                // test code\n            }\n        }\n        `when`("I throw it away") {\n            then("it should come back") {\n                // test code\n            }\n        }\n    }\n})\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Because ",(0,s.kt)("inlineCode",{parentName:"p"},"when")," is a keyword in Kotlin, we must enclose it with backticks. Alternatively, there are title case versions available if you don't like the use of backticks, eg, ",(0,s.kt)("inlineCode",{parentName:"p"},"Given"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"When"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Then"),".")),(0,s.kt)("p",null,"You can also use the ",(0,s.kt)("inlineCode",{parentName:"p"},"And")," keyword in ",(0,s.kt)("inlineCode",{parentName:"p"},"Given")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"When")," to add an extra depth to it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : BehaviorSpec({\n    given("a broomstick") {\n        and("a witch") {\n            `when`("The witch sits on it") {\n                and("she laughs hysterically") {\n                    then("She should be able to fly") {\n                        // test code\n                    }\n                }\n            }\n        }\n    }\n})\n')),(0,s.kt)("p",null,"Note: ",(0,s.kt)("inlineCode",{parentName:"p"},"Then")," scope doesn't have an ",(0,s.kt)("inlineCode",{parentName:"p"},"and")," scope due to a Gradle bug. For more information, see #594"),(0,s.kt)("p",null,"Tests can be disabled using the ",(0,s.kt)("inlineCode",{parentName:"p"},"xgiven"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"xwhen"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"xthen")," variants (in addition to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : BehaviorSpec({\n    xgiven("this is disabled") {\n        When("disabled by inheritance from the parent") {\n            then("disabled by inheritance from its grandparent") {\n                // disabled test\n            }\n        }\n    }\n    given("this is active") {\n        When("this is active too") {\n            xthen("this is disabled") {\n               // disabled test\n            }\n        }\n    }\n})\n')),(0,s.kt)("h2",{id:"word-spec"},"Word Spec"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"WordSpec")," uses the keyword ",(0,s.kt)("inlineCode",{parentName:"p"},"should")," and uses that to nest tests after a context string."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : WordSpec({\n    "String.length" should {\n        "return the length of the string" {\n            "sammy".length shouldBe 5\n            "".length shouldBe 0\n        }\n    }\n})\n')),(0,s.kt)("p",null,"It also supports the keyword ",(0,s.kt)("inlineCode",{parentName:"p"},"When")," allowing to add another level of nesting. Note, since ",(0,s.kt)("inlineCode",{parentName:"p"},"when")," is a keyword\nin Kotlin, we must use backticks or the uppercase variant."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : WordSpec({\n    "Hello" When {\n        "asked for length" should {\n            "return 5" {\n                "Hello".length shouldBe 5\n            }\n        }\n        "appended to Bob" should {\n            "return Hello Bob" {\n                "Hello " + "Bob" shouldBe "Hello Bob"\n            }\n        }\n    }\n})\n')),(0,s.kt)("h2",{id:"free-spec"},"Free Spec"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"FreeSpec")," allows you to nest arbitrary levels of depth using the keyword ",(0,s.kt)("inlineCode",{parentName:"p"},"-")," (minus) for outer tests, and just the test name for the final test:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FreeSpec({\n    "String.length" - {\n        "should return the length of the string" {\n            "sammy".length shouldBe 5\n            "".length shouldBe 0\n        }\n    }\n    "containers can be nested as deep as you want" - {\n        "and so we nest another container" - {\n            "yet another container" - {\n                "finally a real test" {\n                    1 + 1 shouldBe 2\n                }\n            }\n        }\n    }\n})\n')),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"The innermost test must not use the ",(0,s.kt)("inlineCode",{parentName:"p"},"-")," (minus) keyword after the test name.")),(0,s.kt)("h2",{id:"feature-spec"},"Feature Spec"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"FeatureSpec")," allows you to use ",(0,s.kt)("inlineCode",{parentName:"p"},"feature")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"scenario"),", which will be familiar to those who have used ",(0,s.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/gherkin/reference/"},"cucumber"),".\nAlthough not intended to be exactly the same as cucumber, the keywords mimic the style."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FeatureSpec({\n    feature("the can of coke") {\n        scenario("should be fizzy when I shake it") {\n            // test here\n        }\n        scenario("and should be tasty") {\n            // test here\n        }\n    }\n})\n')),(0,s.kt)("p",null,"Tests can be disabled using the ",(0,s.kt)("inlineCode",{parentName:"p"},"xfeature")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"xscenario")," variants (in addition to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : FeatureSpec({\n    feature("this outer block is enabled") {\n        xscenario("this test is disabled") {\n            // test here\n        }\n    }\n    xfeature("this block is disabled") {\n        scenario("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,s.kt)("h2",{id:"expect-spec"},"Expect Spec"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ExpectSpec")," is similar to ",(0,s.kt)("inlineCode",{parentName:"p"},"FunSpec")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ShouldSpec")," but uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"expect")," keyword."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ExpectSpec({\n    expect("my test") {\n        // test here\n    }\n})\n')),(0,s.kt)("p",null,"Tests can be nested in one or more context blocks as well:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ExpectSpec({\n    context("a calculator") {\n        expect("simple addition") {\n            // test here\n        }\n        expect("integer overflow") {\n            // test here\n        }\n    }\n})\n')),(0,s.kt)("p",null,"Tests can be disabled using the ",(0,s.kt)("inlineCode",{parentName:"p"},"xcontext")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"xexpect")," variants (in addition to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/framework/conditional-evaluation.html"},"usual ways"),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ExpectSpec({\n    context("this outer block is enabled") {\n        xexpect("this test is disabled") {\n            // test here\n        }\n    }\n    xcontext("this block is disabled") {\n        expect("disabled by inheritance from the parent") {\n            // test here\n        }\n    }\n})\n')),(0,s.kt)("h2",{id:"annotation-spec"},"Annotation Spec"),(0,s.kt)("p",null,"If you are migrating from JUnit then ",(0,s.kt)("inlineCode",{parentName:"p"},"AnnotationSpec")," is a spec that uses annotations like JUnit 4/5.\nJust add the ",(0,s.kt)("inlineCode",{parentName:"p"},"@Test")," annotation to any function defined in the spec class."),(0,s.kt)("p",null,"You can also add annotations to execute something before tests/specs and after tests/specs, similarly to JUnit's"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"@BeforeAll / @BeforeClass\n@BeforeEach / @Before\n@AfterAll / @AfterClass\n@AfterEach / @After\n")),(0,s.kt)("p",null,"If you want to ignore a test, use ",(0,s.kt)("inlineCode",{parentName:"p"},"@Ignore"),"."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Although this spec doesn't offer much advantage over using JUnit, it allows you to migrate existing tests relatively easily, as you typically just need to adjust imports.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class AnnotationSpecExample : AnnotationSpec() {\n\n    @BeforeEach\n    fun beforeTest() {\n        println("Before each test")\n    }\n\n    @Test\n    fun test1() {\n        1 shouldBe 1\n    }\n\n    @Test\n    fun test2() {\n        3 shouldBe 3\n    }\n}\n')))}h.isMDXComponent=!0}}]);