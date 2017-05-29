import linearAlg from '../../src/linear-alg';

describe('linearAlg', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(linearAlg, 'greet');
      linearAlg.greet();
    });

    it('should have been run once', () => {
      expect(linearAlg.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(linearAlg.greet).to.have.always.returned('hello');
    });
  });
});
