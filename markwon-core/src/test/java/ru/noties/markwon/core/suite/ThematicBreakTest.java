package ru.noties.markwon.core.suite;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;

import ru.noties.markwon.test.TestSpan.Document;

import static ru.noties.markwon.test.TestSpan.document;
import static ru.noties.markwon.test.TestSpan.span;
import static ru.noties.markwon.test.TestSpan.text;

@RunWith(RobolectricTestRunner.class)
@Config(manifest = Config.NONE)
public class ThematicBreakTest extends BaseSuiteTest {

  @Test
  public void single() {

    final Document document = document(
      span(THEMATIC_BREAK, text("\u00a0"))
    );

    match("---", document);
    match("----", document);
    match("***", document);
  }
}
