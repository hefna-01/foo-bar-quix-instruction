package com.kata.foobarquix

import com.kata.foobarquix.services.FooBarQuixService
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class FooBarQuixApplicationTests {

	@Autowired
	private val fooBarQuixService: FooBarQuixService? = null

	@Test
	fun contextLoads() {
		assertThat(fooBarQuixService).isNotNull;
	}

	@Test
	fun isDivideByThreeTest() {
		if (fooBarQuixService != null) {
			assertThat(fooBarQuixService.isDivideByThree(1)).isEqualTo(false);
			assertThat(fooBarQuixService.isDivideByThree(3)).isEqualTo(true);
		}
	}

	@Test
	fun isDivideByFiveTest() {
		if (fooBarQuixService != null) {
			assertThat(fooBarQuixService.isDivideByFive(1)).isEqualTo(false);
			assertThat(fooBarQuixService.isDivideByFive(5)).isEqualTo(true);
		}
	}

	@Test
	fun convertNumberTest() {
		if (fooBarQuixService != null) {
			assertThat(fooBarQuixService.convertNumber(1)).isEqualTo("1");
			assertThat(fooBarQuixService.convertNumber(3)).isEqualTo("FooFoo");
			assertThat(fooBarQuixService.convertNumber(5)).isEqualTo("BarBar");
			assertThat(fooBarQuixService.convertNumber(7)).isEqualTo("Quix");
			assertThat(fooBarQuixService.convertNumber(9)).isEqualTo("Foo");
			assertThat(fooBarQuixService.convertNumber(51)).isEqualTo("FooBar");
			assertThat(fooBarQuixService.convertNumber(53)).isEqualTo("BarFoo");
			assertThat(fooBarQuixService.convertNumber(33)).isEqualTo("FooFooFoo");
			assertThat(fooBarQuixService.convertNumber(27)).isEqualTo("FooQuix");
			assertThat(fooBarQuixService.convertNumber(15)).isEqualTo("FooBarBar");
		}
	}
}
