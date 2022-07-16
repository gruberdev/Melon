﻿using Jint;
using Melon.Engine.Builder;
using System.Collections.Generic;
using Xunit;

namespace Melon.Tests.ScriptLibrary.Standards
{
    public class StdLibraryTests
    {
        private readonly Jint.Engine _engine;

        public StdLibraryTests()
        {
            var builder = new EngineBuilder();

            var loadList = new List<string>()
            {
                "Standard/std"
            };

            loadList.ForEach(x => builder.Load(x));
            _engine = builder.Build();
        }

        [Fact(DisplayName = "'std' Promise should be a valid promise")]
        public void StdPromiseShouldBeAValidPromise()
        {
            var script = @"std.Promise.constructor.name === Promise.constructor.name";
            var result = _engine.Evaluate(script).AsBoolean();

            Assert.True(result);
        }

        [Fact(DisplayName = "'std' shift() method should work correctly")]
        public void StdShiftMethodShouldWorkCorrectly()
        {
            var script = @"
                let a;
                std.shift(1).option(1, (x) => a = x);
                a;
            ";
            var result = _engine.Evaluate(script).AsNumber();

            Assert.Equal(1, result);
        }
    }
}
